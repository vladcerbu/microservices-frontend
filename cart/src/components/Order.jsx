import Products from "./Products.jsx";
import Form from "./Form.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {Alert, AlertTitle, Backdrop, CircularProgress, Collapse, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Order = () => {

    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    useEffect(() => {
        axios.get(`http://${location.hostname}:8080/api/getProductsInCart`)
            .then((res) => setProductList(res.data.products));
    }, [])

    const sendOrder = async (fullName, address, phoneNumber, email) => {
        const formDetails = {fullName, phoneNumber, address, email};
        setIsLoading(true);
        await axios.post(`http://${location.hostname}:8080/api/sendOrder`, { formDetails })
            .finally(() => {
                setIsLoading(false);
                setEmailSent(true);
            });
    }

    return(
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            {emailSent ?
                <Collapse in={emailSent}>
                    <Alert
                        severity="success"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setEmailSent(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit"/>
                            </IconButton>
                        }
                    >
                        <AlertTitle>Success</AlertTitle>
                        Order was successfully sent - <strong>your order will arrive in max 48 hours</strong>
                    </Alert>
                </Collapse>
                : null
            }
            <Products productList={productList} />
            <Form sendOrder={sendOrder}/>
        </div>
    );
}

export default Order;
