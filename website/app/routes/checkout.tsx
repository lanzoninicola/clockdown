import { Link, Outlet, useLocation } from "@remix-run/react";
import Logo from "~/client/common/logo/logo";
import StepButton from "~/client/common/primitives/step-button/step-button";

export default function Checkout() {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <section className="relative grid min-h-screen place-items-center bg-gradient-to-r from-blue-50 to-blue-100 px-4">
      <div className="z-1 absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-20">
        <div className="flex justify-center">
          <span className="md:leading-2 text-center font-accent font-bold sm:invisible md:visible md:px-16 md:text-9xl ">
            {location.pathname === "/checkout/thank-you"
              ? "Obrigado"
              : "Finalizar Compra"}
          </span>
        </div>
      </div>
      <div className="z-20 grid max-w-max grid-rows-[150px_1fr] items-start justify-center gap-y-8 rounded-xl  py-16 shadow-xl backdrop-blur-md md:px-32 md:py-32">
        <div className="flex flex-col items-center gap-8">
          <CheckoutSteps />
          <Logo />
        </div>
        <div className="flex flex-col justify-center gap-8 px-4">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

function CheckoutSteps() {
  const location = useLocation();

  const steps = [
    {
      number: 1,
      to: "/login?checkout=pro",
      label: "Entrar/Cadastrar",
    },
    {
      number: 2,
      to: "/checkout/payment",
      label: "Pagamento",
    },
    {
      number: 3,
      to: "/checkout/thank-you",
      label: "Thank you",
    },
  ];

  return (
    <div className={`grid grid-cols-3`} data-element="checkout-steps">
      {steps.map((step, idx) => {
        return (
          <CheckoutStep
            key={idx}
            to={step.to}
            label={step.label}
            isActive={location.pathname === step.to}
            step={step.number}
          />
        );
      })}
    </div>
  );
}

interface CheckoutStepProps {
  to: string;
  isActive: boolean;
  label: string;
  step: number;
}

function CheckoutStep({
  to,
  step,
  isActive = false,
  label,
}: CheckoutStepProps) {
  return (
    <Link to={to} className=" min-w-[100px] rounded-xl p-2 hover:bg-green-100">
      <div className="flex flex-col items-center justify-center gap-4">
        <StepButton isActive={isActive} buttonClazzName={`bg-accent-base`}>
          {step}
        </StepButton>
        <span
          className={`font-body text-xs font-bold ${
            isActive === false && "opacity-25"
          }`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
}
