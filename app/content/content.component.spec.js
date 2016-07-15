"use strict";
/**
 * Created by peikanghu on 7/14/16.
 */
describe('Snippet Container:ContentComponent', function () {
    var testComponentBuilder;
    //let componentFixture: any;
    /*
    beforeEach(inject([TestComponentBuilder], (_testComponentBuilder: TestComponentBuilder) => {
        testComponentBuilder = _testComponentBuilder;
    }));
    */
    /*
    // First: we setup the injector with providers for our component
    // dependencies for a fixture component builder
    // Note: Animation providers are not necessary
    beforeEach(() => addProviders([testComponentBuilder,
                                    DragulaService,
                                    //RouteParams is instantiated with custom values upon injecting
                                    //provide(RouteParams, {useValue: new RouteParams({id: null})})
                                    //MockBackend, BaseRequestOptions,
                                    ContentComponent,
                                    SnippetService,
                                    ]));

    // We reinstantiate the fixture component builder before each test
    beforeEach(inject([TestComponentBuilder], (_testComponentBuilder: TestComponentBuilder) => {
        testComponentBuilder = _testComponentBuilder;
    }));

    it('should initialise displaying all snippets', done => {
        // We mock the SnippetService provider with some fake data
        let snippetService =
        {
            snippetStore: [{
                name: 'TestSnippet1',
                code: 'TestCode1'
            },{
                name: 'TestSnippet2',
                code: 'TestCode2'
            }]
        };

        testComponentBuilder.overrideProviders(ContentComponent,
                                [ { provide: SnippetService, useValue: snippetService }] )
                            .createAsync(ContentComponent)
            .then(componentFixture => {
                componentFixture.componentInstance.ngOnInit();
                componentFixture.detectChanges();

                let aaaa = componentFixture.componentInstance.snippets;
                console.log(aaaa);

            })



    });*/
});
//# sourceMappingURL=content.component.spec.js.map