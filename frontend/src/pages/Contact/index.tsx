import PerfilAndre from "/andre-perfil.png";
import PerfilAlan from "/alan-perfil.png";
import PerfilVictor from "/victor-perfil.png";

export default function Contact() {
    return (
        <main className="flex flex-col justify-center items-center h-screen text-white text-center">
            <section>
                <h1 className="text-[32px] font-bold mb-20">
                    Time de Desenvolvimento
                </h1>
                <div>
                    <div className="flex justify-center items-center gap-16">
                        <div>
                            <img
                                src={PerfilAlan}
                                alt=""
                                className="w-[250px]"
                            />
                            <div className="flex flex-col gap-2 mt-5">
                                <p>ALAN VITOR FERREIRA SOBRAL </p>
                                <div className="flex gap-4 justify-center">
                                    <i className="text-[48px] fa-brands fa-square-github"></i>
                                    <i className="text-[48px] fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src={PerfilVictor}
                                alt=""
                                className="w-[250px]"
                            />
                            <div className="flex flex-col gap-2 mt-5">
                                <p>VICTOR FERREIRA MARQUES </p>
                                <div className="flex gap-4 justify-center">
                                    <i className="text-[48px] fa-brands fa-square-github"></i>
                                    <i className="text-[48px] fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src={PerfilAndre}
                                alt=""
                                className="w-[250px]"
                            />
                            <div className="flex flex-col gap-2 mt-5">
                                <p>ANDRÉ FELIPE DA SILVA BRAGA</p>
                                <div className="flex gap-4 justify-center">
                                    <i className="text-[48px] fa-brands fa-square-github"></i>
                                    <i className="text-[48px] fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
