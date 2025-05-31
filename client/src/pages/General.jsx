import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

// Utility: Prevent selecting previous days or times in the form
function isPastDateTime(dateStr, timeStr) {
    if (!dateStr || !timeStr) return false;
    const [year, month, day] = dateStr.split('-').map(Number);
    const [hour, minute] = timeStr.split(':').map(Number);
    const inputDate = new Date(year, month - 1, day, hour, minute, 0, 0);
    const now = new Date();
    return inputDate < now;
}

function AppointmentForm({ onAdd, editing, onUpdate, onCancelEdit }) {
    const [specialist, setSpecialist] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [reason, setReason] = useState('');

    useEffect(() => {
        if (editing) {
            const editingDate = new Date(editing.date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (editingDate < today) {
                Swal.fire({
                    title: 'Invalid Date',
                    text: 'Cannot edit to a past date.',
                    icon: 'error',
                    showConfirmButton: true,
                    customClass: {
                        popup: 'animate__animated animate__shakeX'
                    }
                });
                onCancelEdit && onCancelEdit();
                return;
            }
            setName(editing.name);
            setDate(editing.date);
            setTime(editing.time || '');
            setReason(editing.reason);
            setSpecialist(editing.specialist || '');
        } else {
            setName('');
            setDate('');
            setTime('');
            setReason('');
            setSpecialist('');
        }
    }, [editing, onCancelEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !date || !time || !reason || !specialist) {
            Swal.fire('Invalid', 'All fields are required.', 'error');
            return;
        }
        if (isPastDateTime(date, time)) {
            Swal.fire('Invalid', 'Cannot book appointment for previous date or time.', 'error');
            return;
        }
        const appointment = { name, date, time, reason, specialist };
        if (editing) {
            onUpdate({ ...editing, ...appointment });
        } else {
            onAdd(appointment);
        }
        setName('');
        setDate('');
        setTime('');
        setSpecialist('');
        setReason('');
    };

    const handleChange = (e) => {
        setSpecialist(e.target.value);
        if (e.target.value === '') {
            Swal.fire('Invalid', 'Please select a specialist.', 'error');
        }
    };

    // Set min time to current time if today is selected, else allow any time
    const getMinTime = () => {
        const todayStr = new Date().toISOString().split('T')[0];
        if (date === todayStr) {
            const now = new Date();
            return now.toTimeString().slice(0, 5);
        }
        return '';
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white px p-4 rounded shadow mb-6 flex flex-col gap-3">
            <h2 className="text-xl font-semibold mb-2">{editing ? 'Edit Appointment' : 'Book Appointment'}</h2>
            <input
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Patient Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                className="border rounded px-3 py-2"
                type="date"
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={e => setDate(e.target.value)}
            />
            <input
                className="border rounded px-3 py-2"
                type="time"
                value={time}
                min={getMinTime()}
                onChange={e => setTime(e.target.value)}
            />
            <select
                className="border rounded px-3 py-2"
                value={specialist}
                onChange={handleChange}
                required
            >
                <option value="">Select Specialist</option>
                <option value="General Medicine">General Medicine</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Oncology">Oncology</option>
                <option value="Orthopedic">Orthopedic</option>
                <option value="Gastroenterology">Gastroenterology</option>
                <option value="Nephrology & Urology">Nephrology & Urology</option>
                <option value="Pulmonology">Pulmonology</option>
                <option value="Gynecology">Gynecology</option>
                <option value="Radiology">Radiology</option>
                <option value="Physiotherapy">Physiotherapy</option>
                <option value="Psychology">Psychology</option>
                <option value="Vaccination">Vaccination</option>
                <option value="Dental">Dental</option>
                <option value="Ophthalmology">Ophthalmology</option>
                <option value="Pathology">Pathology</option>
                <option value="Rehabilitation">Rehabilitation</option>
                <option value="Tricologist">Tricologist</option>
            </select>
            <input
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Reason"
                value={reason}
                onChange={e => setReason(e.target.value)}
            />
            <div className="flex gap-2">
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    {editing ? 'Update' : 'Book'}
                </button>
                {editing && (
                    <button
                        type="button"
                        className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                        onClick={onCancelEdit}
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
}

AppointmentForm.defaultProps = {
    onAdd: () => {},
    editing: null,
    onUpdate: () => {},
    onCancelEdit: () => {},
};

function AppointmentList({ appointments, onEdit, onDelete }) {
    return (
        <div className="bg-white p-4 rounded shadow mb-6">
            <h2 className="text-xl font-semibold mb-2 animate-bounce">Appointments</h2>
            {appointments.length === 0 ? (
                <p className="text-gray-500">No appointments yet.</p>
            ) : (
                <ul className="divide-y">
                    {appointments.map((appt) => (
                        <li key={appt.id} className="py-2 flex justify-between items-center">
                            <div>
                                <span className="font-medium">{appt.name}</span> -{appt.specialist} - {appt.reason} <br />
                                <span className="text-sm text-gray-500">{appt.date} {appt.time && `at ${appt.time}`}</span>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                                    onClick={() => onEdit(appt)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    onClick={() => onDelete(appt.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function Calendar({ appointments, onDateClick }) {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    const dates = [];
    for (let i = 0; i < firstDay; i++) dates.push(null);
    for (let d = 1; d <= daysInMonth; d++) dates.push(d);

    const getDateString = (d) => {
        if (!d) return '';
        const month = String(currentMonth + 1).padStart(2, '0');
        const day = String(d).padStart(2, '0');
        return `${currentYear}-${month}-${day}`;
    };

    return (
        <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-2">
                <button
                    className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
                    onClick={() => {
                        if (currentMonth === 0) {
                            setCurrentMonth(11);
                            setCurrentYear(currentYear - 1);
                        } else {
                            setCurrentMonth(currentMonth - 1);
                        }
                    }}
                >
                    &lt;
                </button>
                <span className="font-semibold">
                    {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
                </span>
                <button
                    className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
                    onClick={() => {
                        if (currentMonth === 11) {
                            setCurrentMonth(0);
                            setCurrentYear(currentYear + 1);
                        } else {
                            setCurrentMonth(currentMonth + 1);
                        }
                    }}
                >
                    &gt;
                </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                    <div key={d} className="font-bold">{d}</div>
                ))}
                {dates.map((d, idx) => {
                    const dateStr = getDateString(d);
                    const hasAppt = appointments.some(a => a.date === dateStr);
                    return (
                        <div
                            key={idx}
                            className={`h-10 flex items-center justify-center rounded cursor-pointer ${hasAppt ? 'bg-blue-200 font-bold' : 'hover:bg-gray-100'} ${d ? '' : 'bg-transparent cursor-default'}`}
                            onClick={() => d && onDateClick(dateStr)}
                        >
                            {d}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function General() {
    const [appointments, setAppointments] = useState([]);
    const [editing, setEditing] = useState(null);

    const addAppointment = (appt) => {
        if (appointments.some(a => a.date === appt.date && a.time === appt.time)) {
            Swal.fire('Invalid', 'An appointment already exists for this date and time.', 'error');
            return;
        }
        const newAppt = { ...appt, id: Date.now().toString() };
        setAppointments([...appointments, newAppt]);
        Swal.fire('Success', 'Appointment booked successfully!', 'success');
    };

    const updateAppointment = (appt) => {
        if (appointments.some(a => a.date === appt.date && a.time === appt.time && a.id !== appt.id)) {
            Swal.fire('Invalid', 'Another appointment exists for this date and time.', 'error');
            return;
        }
        setAppointments(appointments.map(a => (a.id === appt.id ? appt : a)));
        setEditing(null);
        Swal.fire('Updated', 'Appointment updated successfully!', 'success');
    };

    const deleteAppointment = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to cancel this appointment?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                setAppointments(appointments.filter(a => a.id !== id));
                Swal.fire('Deleted!', 'Appointment has been cancelled.', 'success');
            }
        });
    };

    const handleDateClick = (date) => {
        const appts = appointments.filter(a => a.date === date);
        if (appts.length > 0) {
            Swal.fire(
                'Appointments',
                appts.map(appt => `Patient: ${appt.name}\nTime: ${appt.time}\nReason: ${appt.reason}`).join('\n\n'),
                'info'
            );
        } else {
            Swal.fire('No Appointment', 'No appointment on this date.', 'info');
        }
    };

    // Add animated background GIF using Tailwind and a fixed overlay
    useEffect(() => {
        document.body.classList.add('bg-gradient-to-br', 'from-blue-100', 'via-purple-100', 'to-pink-100', 'min-h-screen', 'transition-all', 'duration-1000');
        const style = document.createElement('style');
        style.innerHTML = `
            body::before {
                content: '';
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                z-index: -1;
                background: url('https://media.post.rvohealth.io/wp-content/uploads/sites/4/2022/05/PC-352806-My_Life_with_OCD-How_OCD_Blocks_Productivity_and_What_to_Do-Gif-1296x728-Header-v2.gif') center center / cover no-repeat;
                opacity: 0.9;
                pointer-events: none;
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.body.classList.remove('bg-gradient-to-br', 'from-blue-100', 'via-purple-100', 'to-pink-100', 'min-h-screen', 'transition-all', 'duration-1000');
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="max-w-3xl mx-auto py-8">
            <h1 className="text-5xl text-fuchsia-900 font-bold mb-6 text-center">Book Appointment</h1>
            <AppointmentForm
                onAdd={addAppointment}
                editing={editing}
                onUpdate={updateAppointment}
                onCancelEdit={() => setEditing(null)}
            />
            <AppointmentList
                appointments={appointments}
                onEdit={appt => setEditing(appt)}
                onDelete={deleteAppointment}
            />
            <Calendar
                appointments={appointments}
                onDateClick={handleDateClick}
            />
        </div>
    );
}

export default General;
