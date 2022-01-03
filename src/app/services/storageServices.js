export const saveLastInterestProduct = (productName) => {
  //   //API Local storage
  //   localStorage.setItem("last product", productName);

  /// Session Storage
  sessionStorage.setItem("last sessions product", productName);
};
