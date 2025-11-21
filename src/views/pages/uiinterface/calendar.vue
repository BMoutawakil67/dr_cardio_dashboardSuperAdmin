<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
      abcd: ["A -> Z", "Most helful"],
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: "prev next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        events: [
          {
            title: "01:01p Test Event 2",
            start: "2023-12-09",
          },
          {
            title: "Event Name 1 : 5:54a",
            start: "2023-12-11",
          },
          {
            title: "Test Event 3 : 11:28a",
            start: "2023-12-11",
          },
          {
            title: "6:54a Test Event 5",
            start: "2023-12-12",
          },
          {
            title: "10:41a Test Event 4",
            start: "2023-12-13",
          },
        ],
        initialView: "dayGridMonth",
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
      },
    };
  },
};

import { ref } from "vue";
const currentDate = ref(new Date());
</script>

<template>
  <div class="page-wrapper">
    <div class="content">
      <div class="row">
        <div class="col-sm-8 col-4">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="dashboard">Dashboard </router-link>
            </li>
            <li class="breadcrumb-item"><i class="feather-chevron-right"></i></li>
            <li class="breadcrumb-item active">Calendar</li>
          </ul>
        </div>
        <div class="col-sm-4 col-8 text-end m-b-30">
          <a
            href="javascript:;"
            class="btn btn-primary btn-rounded"
            data-bs-toggle="modal"
            data-bs-target="#add_event"
            ><i class="fa fa-plus"></i> Add Event</a
          >
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="card-box mb-0">
            <div class="row">
              <div class="col-md-12">
                <div id="calendar">
                  <FullCalendar
                    :options="calendarOptions"
                    :events="calendarOptions.events"
                    id="calendar-book"
                  ></FullCalendar>
                </div>
              </div>
            </div>
          </div>
          <div class="modal fade none-border" id="event-modal">
            <div class="modal-dialog">
              <div class="modal-content modal-md">
                <div class="modal-header">
                  <h4 class="modal-title">Add Event</h4>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div class="modal-body"></div>
                <div class="modal-footer text-center">
                  <button type="button" class="btn btn-primary submit-btn save-event">
                    Create event
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger btn-lg delete-event"
                    data-bs-dismiss="modal"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="add_event" class="modal fade" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content modal-md">
        <div class="modal-header">
          <h4 class="modal-title">Add Event</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label>Event Name <span class="text-danger">*</span></label>
              <input class="form-control" type="text" />
            </div>
            <div class="form-group">
              <label>Event Date <span class="text-danger">*</span></label>
              <div class="cal-icon">
                <datepicker
                  v-model="startdate"
                  :input-format="dateFormat"
                  class="form-control datetimepicker"
                  :editable="true"
                  :clearable="false"
                  placeholder=""
                />
              </div>
            </div>
            <div class="m-t-20 text-center">
              <button class="btn btn-primary submit-btn">Create Event</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
