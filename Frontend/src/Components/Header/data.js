import { assets } from "../../assets/assets";

export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  export const productData = [
    {
      id: 1,
      imageurl:
     "https://plus.unsplash.com/premium_photo-1661763169567-9995f2c67aee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "FRESH MARKET WE'LL DELIVER EVERYTHING YOU NEED",
      price: "Harvested with Care, Delivered with Trust – Empowering Farmers, Serving Freshness",
      description: "SHOP NOW",
    },
    {
      id: 2,
      imageurl:
        "https://images.unsplash.com/photo-1471532027614-154d124ccf57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Subscribe to our plan for the best fresh produce only for you",
      price: "Harvested with Care, Delivered with Trust – Empowering Farmers, Serving Freshness",
      description: "SUBSCRIBE",
    },
];