import { ReactNode } from "react";

import { 
    HeaderContainer, 
    HeaderContent,  
    SignOutButton, 
    UserAvatar 
} from "./styles";

import levvaCoinsLogo from "../../assets/logo.svg"
import { Modal } from "../Modal";
import { Form, 
    FormButton, 
    FormInput, 
} from "../../styles/global";

import { router } from "../../Router";
import { CategoryModal } from "./CategoryModal";
import { TransactionModal } from "./TransactionModal";

export function Header() {
    const userAvatar: ReactNode = (
    <UserAvatar src="https://github.com/ferrande.png" alt="Ferrande" />
    );

    function handleSignOut() {
        window.localStorage.removeItem("user");
        router.navigate("/login");
    }

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={levvaCoinsLogo} alt="levva coins" />

                <div>
                    <CategoryModal />

                    <TransactionModal /> 
                </div>

                <Modal title="Meu perfil" trigger={userAvatar}>
                    <Form>
                        <UserAvatar src="https://github.com/ferrande.png" alt="Ferrande" variant="large" />
                        <FormInput type="name" value="Laís Ferrande" />
                        <FormInput type="email" placeholder="lais.ferrande@levva.io" disabled />
                        <FormButton type="submit">Atualizar</FormButton>

                        <SignOutButton type="button" onClick={handleSignOut}>
                            Sair
                        </SignOutButton>
                    </Form>
                </Modal>
            </HeaderContent>
        </HeaderContainer>
    );
}