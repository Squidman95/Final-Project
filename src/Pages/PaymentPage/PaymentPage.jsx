import Button from "../../Components/Button/Button";
import "./PaymentPage.scss";

const PaymentPage = (props) => {

    return (
        <div className ='PaymentPage'>
            <h2 className='paymentMsg'>Succesful payment!</h2>
            <div className="GoFrontPageButtonContainer">
                <Button to="/"
                        onClick={() => console.log("You clicked on the custom button!")}
                        imageSrc="/assets/images/icons/basket-icon.png"
                        imageClass="default-img-loc"
                        btnText="Go to frontpage"></Button>
            </div>
        </div>    
    )

}

export default PaymentPage;