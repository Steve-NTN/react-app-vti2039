const WithLoading = ({ WrappedComponent=() => null, isLoading = false }) => {
  return (
    <>
      {isLoading && <p>Loading...</p>}

      {!isLoading && <WrappedComponent />}
    </>
  );
};

export default WithLoading;
