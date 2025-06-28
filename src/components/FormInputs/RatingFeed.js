import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function RatingFeed(props) {
  return (
    <>
      <Stack spacing={1}>
        <Rating
          name="half-rating-read"
          defaultValue={props.rate}
          precision={1}
          readOnly
        />
      </Stack>
    </>
  );
}

export default RatingFeed;
