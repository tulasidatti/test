import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe ('CommentBox', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(CommentBox);
	});
	it('It shows correct class' , () => {		
		expect (component).to.have.class('comment-box');
	});
	it('has a textarea' , () => {		
		expect(component.find('textarea')).to.exist;
	});
	it('has a button' , () => {		
		expect(component.find('button')).to.exist;
	});
	describe('Entering text', () => {
		beforeEach(() => {
			component.find('textarea').simulate('change', 'New text comment')
		});
		it('shows text in the text area' , () => {		
			expect(component.find('textarea')).to.have.value ('New text comment');
		});
		it('when submitted clears input' , () => {	
			component.simulate('submit');		
			expect(component.find('textarea')).to.contain.value ('');
		});
	});
	
});