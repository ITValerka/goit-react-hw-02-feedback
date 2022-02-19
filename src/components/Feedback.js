import React, {Component} from 'react';
import FeedbackBtns from './FeedbackBtns'; 
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import './Feedback.module.css';



class Feedback extends Component{
    state = {
        Good: 0,
        Neutral: 0,
        Bad: 0
    }
    countFeedback = button => {
        this.setState({ [button]: this.state[button] + 1 });
    };

    countTotalFeedback = () => {
        const { Good, Neutral, Bad } = this.state;
        const total = Good + Neutral + Bad;
        return total;
    }
    
    countPercentagePositiveFeedback = () => {
        const total = this.countTotalFeedback();
        const positiveFeedback = Math.round((this.state.Good * 100) / total);
        return positiveFeedback;
  };

    render() {
        const { Good, Neutral, Bad } = this.state;
        return (
            <section className='feedbackSection'>
                <Section title="Please leave feedback!">
                    <FeedbackBtns
                        options={['Good', 'Neutral', 'Bad']}
                        onCountFeedback={this.countFeedback}
                    />
                </Section>

                {this.countTotalFeedback() === 0 ? (
                    <Notification message="No feedback given" />
                ) : (
                        <Section title="Statistics">
                            <Statistics
                                options={{ Good, Neutral, Bad }}
                                onCountTotalFeedback={this.countTotalFeedback()}
                                onCountPercentagePositiveFeedback={this.countPercentagePositiveFeedback()}
                            />
                        </Section>
                )}
            </section>
        );
    }
}

export default Feedback;