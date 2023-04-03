/* fetch API */
const btnSearch = document.getElementById("search__btn1");

const result1 = document.getElementById("result__items1");
const result2 = document.getElementById("result__items2");
const result3 = document.getElementById("result__items3");

//записывать данные в session storage

const viewBlockResult = () => {
  const url1 = new URL("http://localhost:3000/data1"); // edit link
  const url2 = new URL("http://localhost:3000/data2"); // edit link
  const url3 = new URL("http://localhost:3000/data3"); // edit link

  const value = document.getElementById("train-info__input").value;
  const date1 = document.getElementById("date1__input").value;
  const date2 = document.getElementById("date2__input").value;

  document.querySelectorAll(".classforremove").forEach((e) => e.remove());
  document.querySelector(".result").style.display = "block";

  fetch(url1, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      const resultItems = data
        .filter((item) => item.number === value && date1 <= item.date && item.date <= date2)
        .map(({ id, number, city, country, date }) => {
          return `<tr class='classforremove'>
              <td>${id}</td>
              <td>${number}</td>
              <td>${city}</td>
              <td>${country}</td>
              <td>${date}</td>
          </tr>`;
        })
        .join("");
      result1.insertAdjacentHTML("beforeend", resultItems);
    })
    .catch((err) => console.error(err));

  fetch(url2, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      const resultItems = data
        .filter((item) => item.number === value && date1 <= item.date && item.date <= date2)
        .map(({ number, city, date }) => {
          return `<tr class='classforremove'>
              <td>${number}</td>
              <td>${city}</td>
              <td>${date}</td>
          </tr>`;
        })
        .join("");
      result2.insertAdjacentHTML("beforeend", resultItems);
    })
    .catch((err) => console.error(err));

  fetch(url3, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      const resultItems = data
        .filter((item) => item.number === value && date1 <= item.date && item.date <= date2)
        .map(({ id, number, type, count, date }) => {
          return `<tr class='classforremove'>
            <td>${id}</td>
            <td>${number}</td>
            <td>${type}</td>
            <td>${count}</td>
            <td>${date}</td>
        </tr>`;
        })
        .join("");
      result3.insertAdjacentHTML("beforeend", resultItems);
    })
    .catch((err) => console.error(err));

  // if (sessionStorage.getItem("data3Storage")) {
  //   // sessionStorage
  //   const resultItemsStorage = sessionStorage
  //     .getItem("data3Storage")
  //     .filter((item) => item.number === value && date1 <= item.date && item.date <= date2)
  //     .map(({ id, number, type, count, date }) => {
  //       return `<tr class='classforremove'>
  //             <td>${id}</td>
  //             <td>${number}</td>
  //             <td>${type}</td>
  //             <td>${count}</td>
  //             <td>${date}</td>
  //         </tr>`;
  //     })
  //     .join("");
  //   result3.insertAdjacentHTML("beforeend", resultItemsStorage);
  // } else {
  //   fetch(url3, {
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`${response.status} - ${response.statusText}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  // const resultItems = data
  //   .filter((item) => item.number === value && date1 <= item.date && item.date <= date2)
  //   .map(({ id, number, type, count, date }) => {
  //     return `<tr class='classforremove'>
  //       <td>${id}</td>
  //       <td>${number}</td>
  //       <td>${type}</td>
  //       <td>${count}</td>
  //       <td>${date}</td>
  //   </tr>`;
  //   })
  //   .join("");
  // result3.insertAdjacentHTML("beforeend", resultItems);
  // console.log("data " + data);
  // console.log("data.toString() " + data.toString());
  // console.log("data.join() " + data.join(""));
  // sessionStorage.setItem("data3Storage", [...data.join("")]); // sessionStorage
  //     })
  //     .catch((err) => console.error(err));
  // }
};

btnSearch.addEventListener("click", viewBlockResult);
