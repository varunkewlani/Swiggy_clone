const Shimmer = () => {
    //return <h1> Shimmer UI </h1>
    return (
    <div className="restaurantlist">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmerCard"></div>
        ))}
    </div>
    );
  };
  export default Shimmer