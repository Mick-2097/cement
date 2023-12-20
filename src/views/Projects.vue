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
  <main class="p-4 flex flex-col items-center min-h-[calc(100vh-68px)] bg-[var(--bg)]">
    <div class="wrapper w-full max-w-[1076px] h-[80px] flex items-center justify-between">
      <h1 class="text-4xl text-normal">Projects</h1>
      <a href="#">Pay</a>
      <Vbutton :buttonText="screenSize < 801 ? 'Create' : 'Create project'" />
    </div>
    
    <!-- If there is no data -->
    <div v-show="!projectData" class="empty">
      <p>You don't have any projects yet.</p>
      <p>You can create a project or you can be added to a project.</p>
    </div>

    <!-- If there is data -->
    <div class="card flex w-full max-w-[1076px] mb-[40px] bg-white py-2 px-4 rounded-xl" v-for="company in companies" :key="company.id">

      <!-- large screen view -->
      <table v-show="projectData && screenSize > 800" class="table-view w-full text-left h-fit border-collapse">
        <thead>
          <tr>
            <th><span>{{ company.name }}, </span> organisation</th>
            <th></th>
            <th>No work</th>
            <th>Working</th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.id">
            <td>{{ project.name }}</td>
            <td class="date">02.03.2022 – 20.12.2023 (still <span>312 d.</span>)</td>
            <td class="counter"><p class="grey">159</p></td>
            <td class="counter"><p class="grey-green">15</p></td>
            <td class="counter"><p class="green">49</p></td>
          </tr>
        </tbody>
      </table>

      <!-- Small screen view -->
      <ul v-show="projectData && screenSize < 801" class="p-4">
        <li>
          <p class="name"><span>{{ company.name }}, </span> organisation</p>
          <p v-for="project in projects" :key="project.id">
            {{ project.name }} 
            <br><br>
            <span class="opacity-70">02.03.2022 – 20.12.2023 (still 312 d.) </span>
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
button {
    width: 156px;
    font-weight: 700;
}
.card {
  box-shadow: var(--shadow);
}
thead tr {
    height: 60px;
}
tbody tr {
    height: 40px;
}
tbody tr:hover {
    background: #bef6f2;
    cursor: pointer;
}
th span {
  font-size: 20px;
  font-weight: 700;
}
th {
  opacity: 0.7;
  font-weight: 400;
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
