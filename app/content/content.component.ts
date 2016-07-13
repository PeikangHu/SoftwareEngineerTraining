import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {DROPDOWN_DIRECTIVES, TOOLTIP_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {DND_DIRECTIVES} from "ng2-dnd/ng2-dnd";
import Snippet from "../shared/interfaces/snippet";
import SnippetService from "../shared/services/snippet.service";
/**
 * Created by peikanghu on 7/11/16.
 */

@Component({
	selector: 'phu-content',
	directives: [DROPDOWN_DIRECTIVES, DND_DIRECTIVES, TOOLTIP_DIRECTIVES],
	styleUrls: ['app/content/content.component.css'],
	templateUrl: 'app/content/content.component.html'
})

export default class ContentComponent implements OnInit
{
	private _isShownSidebar:boolean = true;

	snippets:Snippet[];
	codes:Snippet[];

	numbersOfCodeLine:number = 8;

	stepTitleTooltip:string = 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. 	You may assume that each input would have exactly one solution.';
	dragSnippetTooltip:string = 'Drag and drop to the bottom left.';


	constructor(private snippetService:SnippetService)
	{
		this.snippets = this.snippetService.snippetStore;

		this.codes = [];
	}

	get isShownSidebar()
	{
		return this._isShownSidebar;
	}

	@Output() isShownSidebarValueChanged: EventEmitter<any> = new EventEmitter();

	ngOnInit(): void
	{

	}

	showSidebarClicked(event)
	{
		event.preventDefault();

		this._isShownSidebar = !this._isShownSidebar;

		this.isShownSidebarValueChanged.emit(this._isShownSidebar);
	}
}