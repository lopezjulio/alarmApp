import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { TimePicker } from "ui/time-picker";
;import { TNSTextToSpeech, SpeakOptions } from "nativescript-texttospeech";

@Component({
    selector: "list",
    templateUrl: "pages/list/list.html",
    styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})
export class ListComponent implements OnInit {
    mainPhrase: string;
    hour: string;
    minutes: string;

    storedMainPhrase: string;

    @ViewChild("timePicker") tp: ElementRef;

    ngOnInit() {
        let timePicker: TimePicker = <TimePicker>this.tp.nativeElement;
        timePicker.hour = 9;
        timePicker.minute = 26;
    }

    onTap() {
        let timePicker: TimePicker = <TimePicker>this.tp.nativeElement;
        console.log(timePicker.hour + " : " + timePicker.minute + " main = " +  this.mainPhrase);

        this.hour = timePicker.hour.toString();
        this.minutes = timePicker.minute.toString();
        this.storedMainPhrase = String(this.mainPhrase);
        console.log(this.hour + " : " + this.minutes + " main = " +  this.mainPhrase);

        let TTS: TNSTextToSpeech = new TNSTextToSpeech();

        TTS.speak({
            text: "Hello brother",
            speakRate: 0.48,
            volume: 1.0,
            language: "en-US",
            finishedCallback: () => alert("Done speaking")
        });
    }
}