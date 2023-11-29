// Components
import Category from "./Category/Category";
import Discounts from "./Discounts/Discounts";
import Hero from "./Hero/Hero";
import HeroShowcase from "./HeroShowcase/HeroShowcase";
import Products from "./Products/Products";
import Special from "./Special/Special";

export default function Home() {
    return (
        <>
            <Hero />
            <HeroShowcase />
            <Category />
            <Products />
            <Special />
            <Discounts />    
        </>
    )
}