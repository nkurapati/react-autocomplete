import './setup';
import React from 'react';
import {mount} from 'enzyme';
import AutoCompleteField from './../auto-complete-field';
import SuggestionsService from './../services/suggestions-service';
describe('Auto Complete Field - ', () => {
    let acf =  mount(
            <AutoCompleteField 
                getSuggestions={SuggestionsService.getSuggestions} 
                showResults={SuggestionsService.getDataFromGoogle}
                minChars="3">
            </AutoCompleteField>
        )

    it('Renders without crashing', () => {
        expect(acf.find('.acf').length).toBe(1);
    });

    describe('On input change - ', () => {
        const search = acf.find('.sfield');
        const instance = acf.instance();

        it('Check for minium characters', done => {
            expect(instance.state.suggestions.length).toBe(0);
            search.instance().value = 'au';
            search.simulate('change');

            setTimeout(()=>{
                expect(instance.state.suggestions.length).toBe(0);
                done();
            }, 1000)
        })

        it('Load Suggetions', done => {
            expect(instance.state.suggestions.length).toBe(0);
            search.instance().value = 'auto';
            search.simulate('change');

            setTimeout(()=>{
                expect(instance.state.suggestions.length).toBeGreaterThan(0);
                done();
            }, 3000)
        })
    });
})