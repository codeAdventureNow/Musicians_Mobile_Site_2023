import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import ScheduleButton from '../schedule-button';

describe('Schedule button', () => {
  it('should render our schedule button', () => {
    render(<ScheduleButton />); // ARRANGE

    //ACT
    const scheduleButton = screen.getByTestId('schedule-button');

    expect(scheduleButton).toBeInTheDocument(); // ASSERT
  });
});
