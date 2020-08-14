import React, { useState } from "react";
import data from "./data.js";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import "./styles.css";

export default function Products({ handleClick }) {
  const [products] = useState(data);

  // handleClick represents the function in App.js

  return (
    <div>
      <h1>Products</h1>
      <div className="showcase">
        {products.map((item, index) => (
          <>
            <Card className="card" key={index}>
              <CardMedia className="card-img" image={item.image} />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {item.name}
                </Typography>

                <Typography variant="body1" gutterBottom>
                  $ {item.price}
                </Typography>
              </CardContent>
              <CardActions className="card-action">
                <Button
                  onClick={() => handleClick(item)}
                  size="small"
                  color="primary"
                >
                  ADD TO CART
                </Button>
              </CardActions>
            </Card>
            {/* <button onClick={() => handleClick(item)}>Add to Cart</button> */}
          </>
        ))}
      </div>
    </div>
  );
}
