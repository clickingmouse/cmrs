import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
const CaptionEditor = props => {
  return (
    <div>
      <Container>
        <Card style={{ textAlign: "center" }}>
          <CardHeader title="caption"></CardHeader>
          {props.text}
        </Card>
      </Container>
    </div>
  );
};

export default CaptionEditor;
