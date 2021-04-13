import React from 'react';
import DefaultErrorPage from 'next/error';
import { Spinner} from 'reactstrap';

export const Loader = ({ error404 }) => {
  return (
    <>
      {!error404 ? (
        <div
          style={{
            width: "100%",
            height: "700px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <Spinner color="danger" size="lg" style={{ width: "100px", height: "100px" }} />
        </div>
      ) : <DefaultErrorPage statusCode={404} />}
    </>
  )
};
