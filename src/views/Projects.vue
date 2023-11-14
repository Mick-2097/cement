<script setup>
import Vheader from "../components/Vheader.vue";
import Vbutton from "../components/Vbutton.vue";
import { mainApi } from "@/api/main";
import { onMounted, ref } from "vue";

let projectData = ref(true);

let concretes = [];

const fetchCompanies = async () => {
  projectData.value = false;
  const response = await mainApi.fetchData("GET", "companies");
  concretes = response.data.list;
  projectData.value = true;
};
const fetchProjects = async (companyID) => {
  const response = await mainApi.fetchData("GET", `projects?company_id=${companyID}`);
  console.log(response);
};

onMounted(() => {
  fetchCompanies();
});
</script>

<template>
  <Vheader />
  <main>
    <div class="wrapper">
      <h1 @click="fetchProjects(4)">Список проектов</h1>
      <Vbutton buttonText="Создать проект" />
    </div>
    <!-- To be populated dynamically one card for each project -->
    <div class="card">
      <table v-show="projectData">
        <thead>
          <tr>
            <th><span>РосАтом, </span> организация</th>
            <th></th>
            <th>Нет работ</th>
            <th>В работе</th>
            <th>Готово</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Название проекта которое может быть длинное №9218</td>
            <td class="date">02.03.2022 – 20.12.2023 (еще <span>312 д.</span>)</td>
            <td class="counter"><p class="grey">159</p></td>
            <td class="counter"><p class="grey-green">15</p></td>
            <td class="counter"><p class="green">49</p></td>
          </tr>
          <tr>
            <td>Название другого проекта покороче</td>
            <td class="date">07.05.2023 – 01.11.2023 (еще <span>253 д.</span>)</td>
            <td class="counter"><p class="grey">0</p></td>
            <td class="counter"><p class="grey-green">3</p></td>
            <td class="counter"><p class="green">31</p></td>
          </tr>
          <tr>
            <td>Еще какой-то проект</td>
            <td class="date">25.01.2024 – 14.10.2024 (старт <span>43 д.</span>)</td>
            <td class="counter"><p class="grey">420</p></td>
            <td class="counter"><p class="grey-green">0</p></td>
            <td class="counter"><p class="green">0</p></td>
          </tr>
        </tbody>
      </table>
      <div v-show="!projectData" class="empty">
        <p>У вас пока нет проектов.</p>
        <p>Вы можете создать проект или Вас могут добавить в проект.</p>
      </div>
    </div>
    <div class="card" v-show="projectData">
      <table>
        <thead>
          <tr>
            <th><span>Автодор, </span> организация</th>
            <th></th>
            <th>Нет работ</th>
            <th>В работе</th>
            <th>Готово</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Назване третьего проекта в другой организации</td>
            <td class="date">
              07.05.2022 – 14.02.2023 (еще <span class="red">15 д.</span>)
            </td>
            <td class="counter"><p class="grey">159</p></td>
            <td class="counter"><p class="grey-green">15</p></td>
            <td class="counter"><p class="green">49</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 68px);
  background: var(--bg);
}
.wrapper {
  width: 100%;
  max-width: 1076px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    width: 156px;
    font-weight: 700;
  }
}
h1 {
  font-size: 36px;
  font-weight: 400;
}
.card {
  display: flex;
  width: 100%;
  max-width: 1076px;
  margin-bottom: 40px;
  background: white;
  padding: 8px 16px;
  border-radius: 10px;
  box-shadow: var(--shadow);
}
.card table {
  width: 100%;
  text-align: left;
  height: fit-content;
  border-collapse: collapse;
  > thead tr {
    height: 60px;
  }
  > tbody tr {
    height: 40px;
    /* text-wrap: wrap; */
  }
  > tbody tr:hover {
    background: #bef6f2;
    cursor: pointer;
  }
}
.card table th span {
  font-size: 20px;
  font-weight: 700;
}
.card table th {
  opacity: 0.7;
  font-weight: 400;
}
.date {
  opacity: 0.7;
}
.red {
  color: var(--red); /* If the number is less than 21 highlight red with vue */
  font-weight: 700;
}
.counter {
  text-align: center;
}
.grey {
  width: fit-content;
  padding: 2px 4px;
  background: #eee;
  border-radius: 4px;
  margin: auto;
}
.grey-green {
  width: fit-content;
  padding: 2px 4px;
  background: #eee;
  border-radius: 4px;
  margin: auto;
  border: 1px solid var(--green);
}
.green {
  width: fit-content;
  padding: 2px 4px;
  font-weight: 700;
  color: white;
  background: var(--green);
  border-radius: 4px;
  margin: auto;
}
.empty {
  display: flex;
  flex-direction: column;
  width: 394px;
  font-size: 20px;
  text-align: center;
  gap: 16px;
  opacity: 0.4;
  margin: 100px auto;
}
</style>
