import styles from "./home.module.scss";
import axios from "../../axios";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";

// const data = [
//   {
//     name: "Jan",
//     uv: 1000,
//   },
//   {
//     name: "Feb",
//     uv: 400,
//   },
//   {
//     name: "Mar",
//     uv: 4000,
//   },
//   {
//     name: "Apr",
//     uv: 3000,
//   },
//   {
//     name: "May",
//     uv: 2000,
//   },
//   {
//     name: "Jun",
//     uv: 2780,
//   },
//   {
//     name: "Jul",
//     uv: 1890,
//   },
//   {
//     name: "Aug",
//     uv: 2390,
//   },
//   {
//     name: "Sep",
//     uv: 3490,
//   },
//   {
//     name: "Oct",
//     uv: 1490,
//   },
//   {
//     name: "Nov",
//     uv: 3990,
//   },
//   {
//     name: "Dec",
//     uv: 3400,
//   },
// ];
const Home = () => {
  const [apiData, setApiData] = useState({
    totalPricesWithinDay: 0,
    numOfOrdersWithinDay: 0,
    orders: 0,
    customers: 0,
    products: 0,
    chartData: [],
    revenueChart:0
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [totalSalesResponse, totalOrdersResponse, ordersResponse, customersResponse, productsResponse, chartDataResponse] = await Promise.all([
          axios.get("/order/totalPricesWithinDay"),
          axios.get("/order/numOfOrdersWithinDay"),
          axios.get("/order/totalNumOfOrders"),
          axios.get("/user/totalNumOfUsers"),
          axios.get("/product/totalNumOfProducts"),
          axios.get("/order/totalPricesByMonthWithinYear"),
        ]);
        console.log(totalSalesResponse.data, totalOrdersResponse.data, ordersResponse.data, customersResponse.data, productsResponse.data, chartDataResponse.data)

        setApiData({
          totalPricesWithinDay: totalSalesResponse.data.total_Prices_Today,
          numOfOrdersWithinDay: totalOrdersResponse.data.numOfOrders,
          orders: ordersResponse.data.totalNumOfOrders,
          customers: customersResponse.data.totalNumOfUsers,
          products: productsResponse.data.totalNumOfProducts,
          chartData: chartDataResponse.data.totalPricesByMonth,
          revenueChart:chartDataResponse.data.totalYearlyPrice
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.home}>
      <div
        className="d-flex justify-content-between"
        style={{ paddingLeft: "40px" }}
      >
        <div className=" flex-grow-1 pt-5">
          {console.log(apiData,"apiData")}
          <div className="d-flex flex-grow-1 gap-4">
            <div
              className={`${styles.item} d-flex justify-content-between flex-grow-1 `}
            >
              <div>
                <p>Sales</p>
                <p>Total sales today</p>
                <p>{apiData.totalPricesWithinDay} KWD</p>
              </div>
            </div>
            <div
              className={`${styles.item} d-flex justify-content-between flex-grow-1 `}
            >
              <div>
                <p>Orders</p>
                <p>Total orders today</p>
                <p>{apiData.numOfOrdersWithinDay} KWD</p>
              </div>
            </div>
          </div>
          <div
            style={{ height: "600px", width: "100%" }}
            className="mt-4 bg-white p-5 pb-4 rounded-4"
          >
              <p  className="text-center">Total Revenue <span style={{fontWeight:"bold"}}>{apiData.revenueChart}</span></p>
            <ResponsiveContainer   width="100%" height="100%">
              <BarChart width={120} height={40} data={apiData.chartData}>
                <Bar
                  dataKey="totalPrice"
                  fill="#F6AF05"
                  width={10}
                  maxBarSize={35}
                  radius={[20, 20, 0, 0]}
                />
                <XAxis dataKey="month" scale="auto" className=" text-info " />
                <YAxis 
                width={150}
                domain={[0, Math.max(...apiData.chartData.map((entry) => parseFloat(entry.totalPrice)))]}                
                dataKey="totalPrice" scale="auto" className=" text-info" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className={`${styles.overall}`}>
          <h3>Overall</h3>
          <div className="d-flex align-items-center mb-4">
            <div className={styles.image}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.97853 3.09173C4.84271 2.38547 4.22472 1.875 3.50552 1.875H2.25003C1.83582 1.875 1.50003 2.21079 1.50003 2.625C1.50003 3.03921 1.83582 3.375 2.25003 3.375L3.50552 3.375L4.91255 10.6915C5.18418 12.1041 6.42016 13.125 7.85857 13.125H12.5155C13.8783 13.125 15.0699 12.2064 15.4168 10.8885L16.3551 7.32261C16.7306 5.89592 15.6545 4.5 14.1792 4.5H5.24935L4.97853 3.09173ZM5.53781 6L6.38556 10.4083C6.52138 11.1145 7.13936 11.625 7.85857 11.625H12.5155C13.1969 11.625 13.7927 11.1657 13.9661 10.5067L14.9045 6.94087C15.0297 6.46531 14.671 6 14.1792 6H5.53781Z"
                  fill="#667085"
                />
                <path
                  d="M6.56251 16.125C5.94119 16.125 5.43751 15.6213 5.43751 15C5.43751 14.3787 5.94119 13.875 6.56251 13.875C7.18383 13.875 7.68751 14.3787 7.68751 15C7.68751 15.6213 7.18383 16.125 6.56251 16.125Z"
                  fill="#667085"
                />
                <path
                  d="M13.125 16.125C12.5037 16.125 12 15.6213 12 15C12 14.3787 12.5037 13.875 13.125 13.875C13.7463 13.875 14.25 14.3787 14.25 15C14.25 15.6213 13.7463 16.125 13.125 16.125Z"
                  fill="#667085"
                />
              </svg>
            </div>
            <div>
              <p>{apiData.orders}</p>
              <span>Orders</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <div className={styles.image}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.875 4.875C10.875 6.73896 9.36396 8.25 7.5 8.25C5.63604 8.25 4.125 6.73896 4.125 4.875C4.125 3.01104 5.63604 1.5 7.5 1.5C9.36396 1.5 10.875 3.01104 10.875 4.875ZM9.375 4.875C9.375 5.91053 8.53553 6.75 7.5 6.75C6.46447 6.75 5.625 5.91053 5.625 4.875C5.625 3.83947 6.46447 3 7.5 3C8.53553 3 9.375 3.83947 9.375 4.875Z"
                  fill="#667085"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.5 14.1923C1.5 11.3247 3.82468 9 6.69231 9H8.30769C11.1753 9 13.5 11.3247 13.5 14.1923C13.5 15.0526 12.8026 15.75 11.9423 15.75H3.05769C2.1974 15.75 1.5 15.0526 1.5 14.1923ZM3 14.1923C3 12.1531 4.6531 10.5 6.69231 10.5H8.30769C10.3469 10.5 12 12.1531 12 14.1923C12 14.2242 11.9742 14.25 11.9423 14.25H3.05769C3.02583 14.25 3 14.2242 3 14.1923Z"
                  fill="#667085"
                />
                <path
                  d="M14.1898 15.073C14.1123 15.3736 14.308 15.75 14.6185 15.75H14.9423C15.8026 15.75 16.5 15.0526 16.5 14.1923C16.5 11.3247 14.1753 9 11.3077 9C11.201 9 11.1621 9.14814 11.2527 9.20452C11.962 9.64602 12.5778 10.2236 13.0637 10.9007C13.0966 10.9466 13.139 10.9849 13.1876 11.0137C14.2726 11.6568 15 12.8396 15 14.1923C15 14.2242 14.9742 14.25 14.9423 14.25H14.5871C14.3989 14.25 14.25 14.408 14.25 14.5962C14.25 14.7608 14.2291 14.9206 14.1898 15.073Z"
                  fill="#667085"
                />
                <path
                  d="M11.1892 6.72231C11.2305 6.64006 11.2984 6.57451 11.3796 6.53127C11.9718 6.21611 12.375 5.59264 12.375 4.875C12.375 4.15737 11.9718 3.53389 11.3796 3.21873C11.2984 3.17549 11.2305 3.10994 11.1892 3.02769C10.9797 2.61001 10.7013 2.23284 10.3689 1.91107C10.2173 1.76423 10.2889 1.5 10.5 1.5C12.364 1.5 13.875 3.01104 13.875 4.875C13.875 6.73896 12.364 8.25 10.5 8.25C10.2889 8.25 10.2173 7.98577 10.3689 7.83893C10.7013 7.51716 10.9797 7.13999 11.1892 6.72231Z"
                  fill="#667085"
                />
              </svg>
            </div>
            <div>
              <p>{apiData.customers}</p>
              <span>Customers</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <div className={styles.image}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M16.5 5.99997C16.5073 5.94773 16.5073 5.89472 16.5 5.84247V5.78247C16.4871 5.74061 16.4695 5.70035 16.4475 5.66247C16.4378 5.64087 16.4251 5.62069 16.41 5.60247L16.335 5.50497L16.275 5.45997L16.185 5.39247L9.435 1.64247C9.32099 1.57665 9.19165 1.54199 9.06 1.54199C8.92835 1.54199 8.79901 1.57665 8.685 1.64247L1.935 5.39247L1.8675 5.44497L1.785 5.50497C1.76321 5.5295 1.74549 5.55735 1.7325 5.58747C1.7085 5.609 1.68823 5.63434 1.6725 5.66247C1.65303 5.69538 1.6379 5.73068 1.6275 5.76747C1.6233 5.7923 1.6233 5.81765 1.6275 5.84247C1.57593 5.88694 1.53275 5.94028 1.5 5.99997V12C1.50097 12.1336 1.53764 12.2646 1.60621 12.3793C1.67478 12.494 1.77275 12.5883 1.89 12.6525L8.64 16.4025C8.67099 16.4205 8.70364 16.4356 8.7375 16.4475H8.8125C8.93571 16.4774 9.06429 16.4774 9.1875 16.4475H9.2625L9.3675 16.4025L16.1175 12.6525C16.2333 12.5874 16.3298 12.4926 16.397 12.378C16.4642 12.2633 16.4998 12.1329 16.5 12V5.99997ZM9 8.90247L3.795 5.99997L5.865 4.85997L10.9875 7.78497L9 8.90247ZM9 3.11247L14.205 5.99997L12.525 6.93747L7.4025 4.00497L9 3.11247ZM3 7.27497L8.25 10.215V14.475L3 11.5575V7.27497ZM9.75 14.475V10.215L12 8.95497V11.25L13.5 10.5V8.11497L15 7.28247V11.5575L9.75 14.475Z"
                  fill="#667085"
                />
              </svg>
            </div>
            <div>
              <p>{apiData.products}</p>
              <span>Products</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <div className={`${styles.image} align-self-center `}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 11 18"
                fill="none"
              >
                <mask
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="18"
                  height="18"
                >
                  <path d="M0.382721 0.668335H10.6173V17.3316H0.382721V0.668335Z" />
                </mask>
                <g mask="url(#mask0_89_5250)">
                  <path
                    d="M3.53561 12.8504C3.9139 13.2528 4.3834 13.5095 4.94511 13.6186V9.79331C4.88324 9.76921 4.80147 9.74188 4.69781 9.71054C4.59394 9.68021 4.48084 9.65289 4.35929 9.62878C3.90767 9.50723 3.46228 9.36259 3.02312 9.19805C2.58396 9.03352 2.19 8.81333 1.84204 8.53891C1.49409 8.26428 1.21624 7.92255 1.00992 7.51392C0.802393 7.1051 0.698529 6.59582 0.698529 5.98489C0.698529 5.36231 0.818063 4.81325 1.05593 4.33853C1.29379 3.8626 1.60719 3.46221 1.99814 3.13957C2.38788 2.81572 2.8397 2.5652 3.35219 2.38921C3.86468 2.21202 4.39606 2.10615 4.94511 2.06838V0.660889H6.02454V2.07059C6.57379 2.13126 7.0893 2.2508 7.57145 2.42678C8.05341 2.60397 8.47791 2.84827 8.84374 3.15946C9.20938 3.47065 9.50811 3.85838 9.74075 4.32165C9.97239 4.78593 10.1066 5.33518 10.1431 5.96922H7.54413C7.53168 5.48083 7.3796 5.06578 7.08628 4.72405C6.79378 4.38253 6.43959 4.21056 6.02554 4.21056V7.45004C6.1724 7.4866 6.32106 7.52337 6.47415 7.55993C6.62723 7.59669 6.78855 7.63969 6.95932 7.6879C7.86276 7.93199 8.55766 8.23495 9.04605 8.59435C9.53322 8.95376 9.89384 9.33004 10.1255 9.71999C10.3571 10.1097 10.4943 10.5007 10.5373 10.8916C10.5803 11.2826 10.6012 11.6293 10.6012 11.9343C10.6012 12.2037 10.5341 12.5412 10.3999 12.9498C10.2659 13.3597 10.0248 13.7578 9.67686 14.1488C9.32891 14.5397 8.86263 14.8877 8.27681 15.1926C7.69099 15.4976 6.94043 15.68 6.02554 15.7417V17.2971H4.94612V15.7417C3.57961 15.6443 2.51163 15.223 1.7434 14.4789C0.974161 13.7349 0.52877 12.6429 0.407227 11.2028H2.98857C2.97491 11.8987 3.15832 12.4468 3.53561 12.8504ZM4.34141 4.30277C4.14654 4.36364 3.96935 4.45887 3.81124 4.58583C3.65294 4.71461 3.52818 4.87292 3.43597 5.06156C3.34476 5.25121 3.29875 5.4734 3.29875 5.72915C3.29875 6.13255 3.42652 6.44274 3.68327 6.66292C3.93901 6.8819 4.3603 7.05909 4.94612 7.19329V4.21056C4.73758 4.21056 4.53649 4.24089 4.34141 4.30277ZM6.71201 13.4635C6.94987 13.3838 7.16383 13.2707 7.35247 13.125C7.54112 12.9792 7.69722 12.7979 7.81876 12.5842C7.9403 12.3714 8.00218 12.1177 8.00218 11.8244C8.00218 11.3485 7.85231 10.9923 7.55357 10.7544C7.25484 10.5163 6.74556 10.2996 6.02554 10.1045V13.6186C6.24472 13.5945 6.47415 13.5431 6.71201 13.4635Z"
                    fill="#667085"
                  />
                </g>
              </svg>
            </div>
            <div>
              <p>{apiData.revenueChart} KWD</p>
              <span>Revenue</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
