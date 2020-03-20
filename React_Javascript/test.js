function orderSupplies(item, callback) {
    let warehouse; //undefined
    const deliveryTime = Math.random() * 3000;
    setTimeout(() => {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: () => 'mix it!'
        },
        brush: {
          product: 'Horsehair brush',
          directions: () => 'start painting!'
        }
      };
      callback(warehouse[item]);
    }, deliveryTime);
  }
  function receivedItem(item) {
    console.log(`Received ${item.product}, time to ${item.directions()}`);
  }
  //orderSupplies('brush', receivedItem);
  //orderSupplies('paint', receivedItem);
  
//   const paint = new Promise((resolve, reject) => {
//     orderSupplies('paint', item => {
//       resolve(item);
//     });
//   });
  
  