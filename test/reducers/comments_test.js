import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer',() => {
	it('hadles actions with unknown type', () => {
		//expects(commentReducer()).to.be.instanceof(Array);
		expect(commentReducer(undefined , {})).to.eql([]);

	});
	it('hadles actions action of type SAVE_COMMENT', () => {
		const action = {type: SAVE_COMMENT, payload: 'New Comment'} ;
		expect(commentReducer([],action)).to.eql(['New Comment']);
	});

})