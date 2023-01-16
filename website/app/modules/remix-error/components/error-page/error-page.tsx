import { Link } from "@remix-run/react";
import OhNoErrorImage from "../oh-no-error-image/oh-no-errorimage";

export default function ErrorPage() {
  return (
    <div className="grid h-screen place-items-center p-4">
      <div className="flex flex-col gap-4">
        <OhNoErrorImage />
        <div className="mb-4 flex flex-col items-center justify-center">
          <h1 className="font-body text-2xl font-bold text-blue-500">Poxa!</h1>
          <p className="text-gray-500">
            Algo deu errado. Por favor, tente novamente mais tarde.
          </p>
        </div>
        <Link to="/">
          <p className="text-center font-body text-sm font-bold text-blue-500">
            Retornar a pagina inicial
          </p>
        </Link>
      </div>
    </div>
  );
}
