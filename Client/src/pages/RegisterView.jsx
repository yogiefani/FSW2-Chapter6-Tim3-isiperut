import RegisterForm from "../components/Form/RegisterForm";
import AuthContentCarousel from "../components/Carousel/AuthContentCarousel";
function RegisterView() {
  return (
    <>
      <div class="grid grid-cols-2">
        <RegisterForm />
        <AuthContentCarousel />
      </div>
    </>
  );
}

export default RegisterView;
