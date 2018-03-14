import SuggestionsService from './../services/suggestions-service';
describe('Suggestions Servie ', () => {
    it('Get Suggetions', () => {
        return SuggestionsService.getSuggestions('AutoComplete').then((response => {
            expect(response.length).toBeGreaterThan(0);
        }))
    });

    it('Get Results', () => {
        return SuggestionsService.getDataFromGoogle('AutoComplete').then((response => {
            expect(response.length).toBeGreaterThan(0);
        }))
    });
})