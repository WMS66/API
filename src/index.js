async function main() {
  try {
    if ((await getResultado(5)) > 10) {
      console.log("O valor que retornou é maior que 10");
      if ((await getResultado(3)) < 10) {
        console.log("O valor é menor que 10");
      }
    }
  } catch (err) {
    console.log("deu erro");
    console.log(err);
  }
}

main();

function getResultado(parametro) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(parametro * 2.5);
    }, 3000);
  });
}
