import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {DROPDOWN_DIRECTIVES, TOOLTIP_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import Snippet from "../shared/interfaces/snippet";
import SnippetService from "../shared/services/snippet.service";
import {Dragula, DragulaService} from "ng2-dragula/ng2-dragula";
/**
 * Created by peikanghu on 7/11/16.
 */

@Component({
	selector: 'phu-content',
	directives: [DROPDOWN_DIRECTIVES, TOOLTIP_DIRECTIVES, Dragula],
	viewProviders: [DragulaService],
	providers: [SnippetService],
	styleUrls: ['app/content/content.component.css',
				'node_modules/dragula/dist/dragula.css'],
	templateUrl: 'app/content/content.component.html',
})

export default class ContentComponent implements OnInit
{
	private _isShownSidebar:boolean = true;

	snippets:Snippet[];
	codes:Snippet[];

	stepTitleTooltip:string = 'Given nums = [2, 7] target = 9 Because nums[0] + nums[1] = 9 return [0, 1].';
	dragSnippetTooltip:string = 'Drag and drop to the bottom left.';


	constructor(private snippetService:SnippetService,
	            private dragulaService: DragulaService)
	{
		this.snippets = [];
		this.codes = [];
	}

	get isShownSidebar()
	{
		return this._isShownSidebar;
	}

	@Output() isShownSidebarValueChanged: EventEmitter<any> = new EventEmitter();

	ngOnInit(): void
	{
		this.snippetService.getSnippets().subscribe(snippets => this.snippets = snippets);
	}

	showSidebarClicked(event)
	{
		event.preventDefault();

		this._isShownSidebar = !this._isShownSidebar;

		this.isShownSidebarValueChanged.emit(this._isShownSidebar);
	}
}