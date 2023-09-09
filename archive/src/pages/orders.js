import OrderPage from "@/features/OrderPage";
import { baseURL } from "@/utils/constants";

function Orders({ recipes }) {
  return <OrderPage recipes={recipes} />
}

Orders.getInitialProps = async (ctx) => {
  // Fetch constant from file (technically could use a require and load it, but it's cleaner as a RESET call)
  const res = await fetch(`${baseURL}/api/recipes`);
  const json = await res.json();
  return { recipes: json?.recipes ?? [] };
};

export default Orders;