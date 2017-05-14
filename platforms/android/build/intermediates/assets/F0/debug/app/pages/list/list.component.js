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
        var timePicker = this.tp.nativeElement;
        console.log(timePicker.hour + " : " + timePicker.minute + " main = " + this.mainPhrase);
        this.hour = timePicker.hour.toString();
        this.minutes = timePicker.minute.toString();
        this.storedMainPhrase = String(this.mainPhrase);
        console.log(this.hour + " : " + this.minutes + " main = " + this.mainPhrase);
        var TTS = new nativescript_texttospeech_1.TNSTextToSpeech();
        TTS.speak({
            text: "Hello brother",
            speakRate: 0.48,
            volume: 1.0,
            language: "en-US",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBRXpFLENBQUM7QUFBQSx1RUFBMEU7QUFPM0UsSUFBYSxhQUFhO0lBQTFCO0lBa0NBLENBQUM7SUF6QkcsZ0NBQVEsR0FBUjtRQUNJLElBQUksVUFBVSxHQUEyQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUMvRCxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNwQixVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksVUFBVSxHQUEyQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV6RixJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLEdBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTlFLElBQUksR0FBRyxHQUFvQixJQUFJLDJDQUFlLEVBQUUsQ0FBQztRQUVqRCxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ04sSUFBSSxFQUFFLGVBQWU7WUFDckIsU0FBUyxFQUFFLElBQUk7WUFDZixNQUFNLEVBQUUsR0FBRztZQUNYLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLGdCQUFnQixFQUFFLGNBQU0sT0FBQSxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQXRCLENBQXNCO1NBQ2pELENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUEzQjRCO0lBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDOzhCQUFLLGlCQUFVO3lDQUFDO0FBUC9CLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7S0FDbkUsQ0FBQztHQUNXLGFBQWEsQ0FrQ3pCO0FBbENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRpbWVQaWNrZXIgfSBmcm9tIFwidWkvdGltZS1waWNrZXJcIjtcclxuO2ltcG9ydCB7IFROU1RleHRUb1NwZWVjaCwgU3BlYWtPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZXh0dG9zcGVlY2hcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibGlzdFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9saXN0L2xpc3QuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIG1haW5QaHJhc2U6IHN0cmluZztcclxuICAgIGhvdXI6IHN0cmluZztcclxuICAgIG1pbnV0ZXM6IHN0cmluZztcclxuXHJcbiAgICBzdG9yZWRNYWluUGhyYXNlOiBzdHJpbmc7XHJcblxyXG4gICAgQFZpZXdDaGlsZChcInRpbWVQaWNrZXJcIikgdHA6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgbGV0IHRpbWVQaWNrZXI6IFRpbWVQaWNrZXIgPSA8VGltZVBpY2tlcj50aGlzLnRwLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdGltZVBpY2tlci5ob3VyID0gOTtcclxuICAgICAgICB0aW1lUGlja2VyLm1pbnV0ZSA9IDI2O1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGFwKCkge1xyXG4gICAgICAgIGxldCB0aW1lUGlja2VyOiBUaW1lUGlja2VyID0gPFRpbWVQaWNrZXI+dGhpcy50cC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRpbWVQaWNrZXIuaG91ciArIFwiIDogXCIgKyB0aW1lUGlja2VyLm1pbnV0ZSArIFwiIG1haW4gPSBcIiArICB0aGlzLm1haW5QaHJhc2UpO1xyXG5cclxuICAgICAgICB0aGlzLmhvdXIgPSB0aW1lUGlja2VyLmhvdXIudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLm1pbnV0ZXMgPSB0aW1lUGlja2VyLm1pbnV0ZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVkTWFpblBocmFzZSA9IFN0cmluZyh0aGlzLm1haW5QaHJhc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaG91ciArIFwiIDogXCIgKyB0aGlzLm1pbnV0ZXMgKyBcIiBtYWluID0gXCIgKyAgdGhpcy5tYWluUGhyYXNlKTtcclxuXHJcbiAgICAgICAgbGV0IFRUUzogVE5TVGV4dFRvU3BlZWNoID0gbmV3IFROU1RleHRUb1NwZWVjaCgpO1xyXG5cclxuICAgICAgICBUVFMuc3BlYWsoe1xyXG4gICAgICAgICAgICB0ZXh0OiBcIkhlbGxvIGJyb3RoZXJcIixcclxuICAgICAgICAgICAgc3BlYWtSYXRlOiAwLjQ4LFxyXG4gICAgICAgICAgICB2b2x1bWU6IDEuMCxcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IFwiZW4tVVNcIixcclxuICAgICAgICAgICAgZmluaXNoZWRDYWxsYmFjazogKCkgPT4gYWxlcnQoXCJEb25lIHNwZWFraW5nXCIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=