import { Component, ViewChild, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    let calendarEl: HTMLElement = document.getElementById('calendar')!;

  let calendar = new Calendar(calendarEl, {
    plugins: [resourceTimelinePlugin],
    editable: true, // enable draggable events
    aspectRatio: 1.8,
    scrollTime: '00:00', // undo default 6am scrollTime
    headerToolbar: {
      left: 'today prev,next',
      center: 'title',
      right: 'resourceTimeline3Week,resourceTimeline3Month'
    },
    initialView: 'resourceTimeline3Week',
    views: {
      resourceTimeline3Week: {
        type: 'resourceTimeline',
        duration: { weeks: 3 },
        buttonText: '3 week',
        slotLabelFormat: [
          {month: 'short'},
          {weekday: 'short', day: 'numeric'}
        ]
      }
      ,
      resourceTimeline3Month: {
        type: 'resourceTimeline',
        duration: { months: 3 },
        buttonText: '3 month',
        slotLabelFormat: [
          {month: 'short'},
          {weekday: 'short', day: 'numeric'}
        ]
      }
    },
    resourceAreaHeaderContent: 'Rooms',
    resources: [
      { id: 'a', title: 'Auditorium A' },
      { id: 'b', title: 'Auditorium B', eventColor: 'green' },
      { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
    ],
    events: [
      { id: '1', resourceId: 'b', start: '2018-02-07T02:00:00', end: '2018-02-07T07:00:00', title: 'event 1' },
      { id: '2', resourceId: 'c', start: '2018-02-07T05:00:00', end: '2018-02-07T22:00:00', title: 'event 2' },
      { id: '3', resourceId: 'd', start: '2018-02-06', end: '2018-02-08', title: 'event 3' },
      { id: '4', resourceId: 'e', start: '2018-02-07T03:00:00', end: '2018-02-07T08:00:00', title: 'event 4' },
      { id: '5', resourceId: 'f', start: '2018-02-07T00:30:00', end: '2018-02-07T02:30:00', title: 'event 5' }
    ],
    dayRender: function(dayRenderInfo ) { 
      console.log(dayRenderInfo);
    }
  });
  calendar.render();
  }
  // @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template
  

  // calendarVisible = true;
  // calendarOptions = {
  //   schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
  //   plugins: [resourceTimelinePlugin],
  //   headerToolbar: {
  //     left: 'prev,next today',
  //     center: 'title',
  //     right: 'resourceTimelineWeek,resourceTimelineDay,resourceTimelineThreeDays'
  //   },
  //   initialView: 'resourceTimelineThreeDays',
  //   weekends: true,
  //   editable: true,
  //   // dateClick: this.handleDateClick.bind(this),
  //   events: [
  //     { title: 'Event Now', start: new Date() }
  //   ] as any,
  //   view: {
  //     resourceTimelineThreeDays: {
  //       type: 'resourceTimeline',
  //       duration: { days: 3 },
  //       buttonText: '3 day',
  //       slotLabelFormat: { weekday: 'short', day: 'numeric'}
  //     }
  //   },
  //   resourceAreaHeaderContent: 'Rooms',
  //   resources: [
  //     { id: 'b', title: 'Auditorium B', eventColor: 'green' },
  //     { id: 'c', title: 'Auditorium C', eventColor: 'orange' }
  //   ],
  //   slotWidth: 20
  // };
}
