<script setup>
import Vheader from "../components/Vheader.vue"
import Vbutton from "../components/Vbutton.vue"
import { mainApi } from "@/api/main"
import { onMounted, ref } from "vue"

let projectData = ref(true)

let companies = []
let projects = []
let screenSize = window.innerWidth

const fetchCompanies = async () => {
  projectData.value = false
  const response = await mainApi.fetchData("GET", "companies")
  companies = response.data
  fetchProjects(companies[0].id)
}
const fetchProjects = async (companyID) => {
  const response = await mainApi.fetchData("GET", `projects?company_id=${companyID}`)
  projects = response.data.list
  projectData.value = true
}

onMounted(() => {
  fetchCompanies()
})
</script>

<template>
  <Vheader />
  <main>
    <div class="wrapper">
      <h1>Проекты</h1>
      <a href="#">Оплаты</a>
      <Vbutton :buttonText="screenSize < 801 ? 'Создать' : 'Создать проект'" />
    </div>
    
    <!-- If there is no data -->
    <div v-show="!projectData" class="empty">
      <p>У вас пока нет проектов.</p>
      <p>Вы можете создать проект или Вас могут добавить в проект.</p>
    </div>

    <!-- If there is data -->
    <div class="card" v-for="company in companies" :key="company.id">

      <!-- large screen view -->
      <table v-show="projectData" class="table-view">
        <thead>
          <tr>
            <th><span>{{ company.name }}, </span> организация</th>
            <th></th>
            <th>Нет работ</th>
            <th>В работе</th>
            <th>Готово</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.id">
            <td>{{ project.name }}</td>
            <td class="date">02.03.2022 – 20.12.2023 (еще <span>312 д.</span>)</td>
            <td class="counter"><p class="grey">159</p></td>
            <td class="counter"><p class="grey-green">15</p></td>
            <td class="counter"><p class="green">49</p></td>
          </tr>
        </tbody>
      </table>

      <!-- Small screen view -->
      <ul v-show="projectData" class="list-view">
        <li>
          <p class="name"><span>{{ company.name }}, </span> организация</p>
          <p v-for="project in projects" :key="project.id">
            {{ project.name }} 
            <br><br>
            <span class="date">02.03.2022 – 20.12.2023 (еще 312 д.) </span>
            <br><br>
            <div class="list-counters">
              <div class="counter"><p class="grey">159</p></div>
              <div class="counter"><p class="grey-green">15</p></div>
              <div class="counter"><p class="green">49</p></div>
            </div>
          </p>

        </li>
      </ul>

    </div>

  </main>
</template>

<style scoped>
main {
  padding: 0 1rem;
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
  
}
button {
    width: 156px;
    font-weight: 700;
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
.table-view {
  width: 100%;
  text-align: left;
  height: fit-content;
  border-collapse: collapse;
  > thead tr {
    height: 60px;
  }
  > tbody tr {
    height: 40px;
  }
  > tbody tr:hover {
    background: #bef6f2;
    cursor: pointer;
  }
}
.table-view th span {
  font-size: 20px;
  font-weight: 700;
}
.table-view th {
  opacity: 0.7;
  font-weight: 400;
}
.list-view {
  display: none;
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
  max-width: 90%;
  font-size: 20px;
  text-align: center;
  gap: 16px;
  opacity: 0.4;
  margin: 100px auto;
}
@media(max-width: 801px) {
  h1 {
    font-size: 20px;
  }
  .wrapper button {
    width: fit-content;
    padding: 0 1rem;
  }
  .table-view {
    display: none;
  }
  .card {
    padding: 8px 0;
    border: 1px solid #D9D9D9;
  }
  .list-view {
    display: contents;
    list-style: none;
    > li {
      width: 100%;
    }
    > li .name span {
      font-size: 20px;
      font-weight: bolder;
      color: black;
    }
    > li .name {
      font-size: 20px;
      color: #777;
    }
    > li p {
      font-size: 14px;
      padding: 8px 16px;
      border-bottom: 1px solid #D9D9D9;
    }
    > li p:last-of-type {
      border-bottom: none;
    }
  }
  .list-counters {
    display: flex;
    gap: 10px;
  }
  .list-view li p.grey {
    padding: 2px;
  }
  .list-view li p.grey-green {
    padding: 2px;
  }
  .list-view li p.green {
    padding: 2px;
  }
}
</style>
