import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

// Test to check if the TodoList renders correctly
test('renders TodoList component', () => {
    render(<TodoList />);
    // Verify component initial render
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
    expect(screen.getByText('Increment')).toBeInTheDocument();
    expect(screen.getByText('Decrement')).toBeInTheDocument();
});

// Test to check if the increment button works
test('increments TodoList', () => {
    render(<TodoList />);
    // Simulate click event
    fireEvent.click(screen.getByText('Increment'));
    // Verify if the count is incremented
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});

// Test to check if the decrement button works
test('decrements TodoList', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByText('Increment')); // Increment to avoid negative counting scenario
    fireEvent.click(screen.getByText('Decrement'));
    // Verify if the count is decremented
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});