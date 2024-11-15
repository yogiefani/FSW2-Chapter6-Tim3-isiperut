import AuthContentCarousel from "../components/Carousel/AuthContentCarousel";
import LoginForm from "../components/Form/LoginForm";
function LoginView() {
  return (
    <>
      <div class="grid grid-cols-2">
        <LoginForm />
        <AuthContentCarousel />
      </div>
    </>
  );
}

export default LoginView;
