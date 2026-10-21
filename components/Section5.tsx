import React from 'react'
import bcmsHome from "../bcms-content/home.json";
import { bcms, bcmsStyle } from "../src/bcms-content";

export default function Section5({ rootProps }: { rootProps?: React.ComponentProps<'section'> }) {
  const products = [
    { name: ['section5-div-audira-one', 'Audira One'], price: ['section5-div-4499', '4499'], image: ['section5-img-audira-one', '/images/green.png'] },
    { name: ['section5-div-audira-plus', 'Audira Plus'], price: ['section5-div-7499', '7499'], image: null },
    { name: ['section5-div-audira-max-pro', 'Audira Max Pro'], price: ['section5-div-11499', '11499'], image: ['section5-img-audira-max-pro', '/images/black.png'] },
  ] as const

  return (
    <section id="section5" data-bcms-section-label="Section5" {...rootProps}>
      <h2 className="heading" data-bcms-field="section5-h2-top-picks" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, "section5-h2-top-picks")}>{bcms(bcmsHome, "section5-h2-top-picks", "Top Picks")}</h2>
      <div className="product-section">
        {products.map((product, index) => (
          <div key={index} className="product">
            {product.image && (
              <img 
                src={bcms(bcmsHome, product.image[0], product.image[1])} 
                alt={bcms(bcmsHome, product.name[0], product.name[1])} data-bcms-field={product.image[0]} data-bcms-kind="image" data-bcms-style="2" style={bcmsStyle(bcmsHome, product.image[0])}
              />
            )}
            <div className="name" data-bcms-field={product.name[0]} data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, product.name[0])}>{bcms(bcmsHome, product.name[0], product.name[1])}</div>
            <div className="price" data-bcms-field={product.price[0]} data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsHome, product.price[0])}>{`₹${Number(bcms(bcmsHome, product.price[0], product.price[1])).toLocaleString('en-IN')}`}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
