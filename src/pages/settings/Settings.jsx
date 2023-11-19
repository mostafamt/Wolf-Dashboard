import { useForm } from "react-hook-form";
import FormBox from "../../components/FormBox/FormBox";
import Head from "../../components/Head/Head";
import Input from "../../components/Input/Input";
import axios from "../../axios";
import { toast } from "react-toastify";

const Settings = () => {
  const fetchData = async () => {
    const res = await axios.get("/system");
    const { shipping_fees, shipping_duration } = res.data;
    return {
      shipping_fees,
      shipping_duration,
    };
  };

  const { register, handleSubmit } = useForm({
    defaultValues: async () => fetchData(),
  });

  const onSubmit = async (values) => {
    try {
      await axios.put("/system", values);
      toast.success("System updated successfully !");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Head title="System" list={["System", "Settings"]} />
      <div>
        <FormBox title="System" col={2}>
          <Input
            label="Shipping fees"
            type="number"
            name="shipping_fees"
            register={register}
          />
          <Input
            label="Shipping duration"
            type="number"
            name="shipping_duration"
            register={register}
          />
        </FormBox>
      </div>
    </form>
  );
};

export default Settings;
