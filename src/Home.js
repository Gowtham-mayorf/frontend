import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [customerList, setCustomerList] = useState(null);
   
    useEffect(() => {
        // ...your code here
    }, []);

    return (
        <div>
            <h1 className="text-center">Welcome to Techcess</h1>
        </div>
    );
}

export default Home;

