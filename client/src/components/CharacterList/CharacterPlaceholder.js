import { Card, CardContent, CardHeader, Divider } from "@material-ui/core";
import React from "react";
import ReactPlaceholder from "react-placeholder";

const CharacterPlaceholder = () => {
  return (
    <Card variant="outlined">
      <CardHeader
        title={<ReactPlaceholder type="textRow" showLoadingAnimation />}
        avatar={
          <ReactPlaceholder
            type="round"
            style={{ width: 30, height: 30 }}
            showLoadingAnimation
          />
        }
      />
      <Divider />
      <CardContent>
        <ReactPlaceholder type="text" rows={2} showLoadingAnimation />
      </CardContent>
    </Card>
  );
};

export default CharacterPlaceholder;
