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
        this.getTimePickerAndPhraseInput();

        this.generateTextToSpeachFromUserInput();
    }

    private getTimePickerAndPhraseInput() {
        let timePicker: TimePicker = <TimePicker>this.tp.nativeElement;

        this.hour = timePicker.hour.toString();
        this.minutes = timePicker.minute.toString();
        this.storedMainPhrase = String(this.mainPhrase);
    }

    private generateTextToSpeachFromUserInput() {
        let TTS: TNSTextToSpeech = new TNSTextToSpeech();

        TTS.speak({
            text: this.storedMainPhrase + ", time to wake up. It's " + this.hour + ":" + this.minutes,
            speakRate: 0.60,
            volume: 1.0,
            language: "en-GB",
            finishedCallback: () => alert("Done speaking")
        });
    }
}