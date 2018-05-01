import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Chart Sample';
    config.map([
      {"route": ["", "bar-chart"], "name": "bar-chart", "moduleId": PLATFORM.moduleName("./bar-chart"), "nav": true, "title": "Bar Chart"},
      {"route": "pie-chart", "name": "pie-chart", "moduleId": PLATFORM.moduleName("./pie-chart"), "nav": true, "title": "Pie Chart"},
      {"route": "line-chart", "name": "line-chart", "moduleId": PLATFORM.moduleName("./line-chart"), "nav": true, "title": "Line Chart"}
    ]);

    this.router = router;
  }
}
