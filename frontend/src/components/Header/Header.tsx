import ProductFilterContextProvider from "../../context/ProductFilterContext";
// Components
import SubNav from "./SubNav/SubNav";
import Nav from "./Nav/Nav";

export default function Header() {
    return (
        <ProductFilterContextProvider>
            <header>
                <Nav />
                <SubNav />
            </header>
        </ProductFilterContextProvider>
    )
}