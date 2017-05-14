"use strict";
var core_1 = require("@angular/core");
;
var nativescript_texttospeech_1 = require("nativescript-texttospeech");
var ListComponent = (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
        var timePicker = this.tp.nativeElement;
        timePicker.hour = 9;
        timePicker.minute = 26;
    };
    ListComponent.prototype.onTap = function () {
        this.getTimePickerAndPhraseInput();
        this.generateTextToSpeachFromUserInput();
    };
    ListComponent.prototype.getTimePickerAndPhraseInput = function () {
        var timePicker = this.tp.nativeElement;
        this.hour = timePicker.hour.toString();
        this.minutes = timePicker.minute.toString();
        this.storedMainPhrase = String(this.mainPhrase);
    };
    ListComponent.prototype.generateTextToSpeachFromUserInput = function () {
        var TTS = new nativescript_texttospeech_1.TNSTextToSpeech();
        TTS.speak({
            text: this.storedMainPhrase + ", time to wake up. It's " + this.hour + ":" + this.minutes,
            speakRate: 0.60,
            volume: 1.0,
            language: "en-GB",
            finishedCallback: function () { return alert("Done speaking"); }
        });
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild("timePicker"),
    __metadata("design:type", core_1.ElementRef)
], ListComponent.prototype, "tp", void 0);
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
    })
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBRXpFLENBQUM7QUFBQSx1RUFBMEU7QUFPM0UsSUFBYSxhQUFhO0lBQTFCO0lBd0NBLENBQUM7SUEvQkcsZ0NBQVEsR0FBUjtRQUNJLElBQUksVUFBVSxHQUEyQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUMvRCxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNwQixVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFTyxtREFBMkIsR0FBbkM7UUFDSSxJQUFJLFVBQVUsR0FBMkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFFL0QsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU8seURBQWlDLEdBQXpDO1FBQ0ksSUFBSSxHQUFHLEdBQW9CLElBQUksMkNBQWUsRUFBRSxDQUFDO1FBRWpELEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLDBCQUEwQixHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPO1lBQ3pGLFNBQVMsRUFBRSxJQUFJO1lBQ2YsTUFBTSxFQUFFLEdBQUc7WUFDWCxRQUFRLEVBQUUsT0FBTztZQUNqQixnQkFBZ0IsRUFBRSxjQUFNLE9BQUEsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUF0QixDQUFzQjtTQUNqRCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBakM0QjtJQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQzs4QkFBSyxpQkFBVTt5Q0FBQztBQVAvQixhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO0tBQ25FLENBQUM7R0FDVyxhQUFhLENBd0N6QjtBQXhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUaW1lUGlja2VyIH0gZnJvbSBcInVpL3RpbWUtcGlja2VyXCI7XHJcbjtpbXBvcnQgeyBUTlNUZXh0VG9TcGVlY2gsIFNwZWFrT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGV4dHRvc3BlZWNoXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImxpc3RcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBtYWluUGhyYXNlOiBzdHJpbmc7XHJcbiAgICBob3VyOiBzdHJpbmc7XHJcbiAgICBtaW51dGVzOiBzdHJpbmc7XHJcblxyXG4gICAgc3RvcmVkTWFpblBocmFzZTogc3RyaW5nO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJ0aW1lUGlja2VyXCIpIHRwOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGxldCB0aW1lUGlja2VyOiBUaW1lUGlja2VyID0gPFRpbWVQaWNrZXI+dGhpcy50cC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHRpbWVQaWNrZXIuaG91ciA9IDk7XHJcbiAgICAgICAgdGltZVBpY2tlci5taW51dGUgPSAyNjtcclxuICAgIH1cclxuXHJcbiAgICBvblRhcCgpIHtcclxuICAgICAgICB0aGlzLmdldFRpbWVQaWNrZXJBbmRQaHJhc2VJbnB1dCgpO1xyXG5cclxuICAgICAgICB0aGlzLmdlbmVyYXRlVGV4dFRvU3BlYWNoRnJvbVVzZXJJbnB1dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGltZVBpY2tlckFuZFBocmFzZUlucHV0KCkge1xyXG4gICAgICAgIGxldCB0aW1lUGlja2VyOiBUaW1lUGlja2VyID0gPFRpbWVQaWNrZXI+dGhpcy50cC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgICAgICB0aGlzLmhvdXIgPSB0aW1lUGlja2VyLmhvdXIudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLm1pbnV0ZXMgPSB0aW1lUGlja2VyLm1pbnV0ZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVkTWFpblBocmFzZSA9IFN0cmluZyh0aGlzLm1haW5QaHJhc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2VuZXJhdGVUZXh0VG9TcGVhY2hGcm9tVXNlcklucHV0KCkge1xyXG4gICAgICAgIGxldCBUVFM6IFROU1RleHRUb1NwZWVjaCA9IG5ldyBUTlNUZXh0VG9TcGVlY2goKTtcclxuXHJcbiAgICAgICAgVFRTLnNwZWFrKHtcclxuICAgICAgICAgICAgdGV4dDogdGhpcy5zdG9yZWRNYWluUGhyYXNlICsgXCIsIHRpbWUgdG8gd2FrZSB1cC4gSXQncyBcIiArIHRoaXMuaG91ciArIFwiOlwiICsgdGhpcy5taW51dGVzLFxyXG4gICAgICAgICAgICBzcGVha1JhdGU6IDAuNjAsXHJcbiAgICAgICAgICAgIHZvbHVtZTogMS4wLFxyXG4gICAgICAgICAgICBsYW5ndWFnZTogXCJlbi1HQlwiLFxyXG4gICAgICAgICAgICBmaW5pc2hlZENhbGxiYWNrOiAoKSA9PiBhbGVydChcIkRvbmUgc3BlYWtpbmdcIilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==