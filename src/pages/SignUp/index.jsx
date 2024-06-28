import SignUpForm from "../../components/SignUpForm";
import Layout from "../../layout";
import ImageData from "../../db/ImageData";
import SignUpContainer from "./SignUPContainer";

const SignUp = () => {
  return (
    <Layout>
      <SignUpContainer>
        <SignUpForm />
        <div className="image-container">
          <img src={ImageData[74].src} alt="" />
        </div>
      </SignUpContainer>
    </Layout>
  );
};

export default SignUp;
