<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->query('search');
        $tasks = Task::query()->when(
            $search,
            fn($query) =>
            $query->where('title', 'LIKE', "%{$search}%")
        )
            ->where('user_id', auth()->user()->id)
            ->latest()
            ->paginate(10);

        // return response()->json($tasks);
        return Inertia::render('Task/Index', ['tasks' => $tasks]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Task/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|unique:tasks,title|max:255',
            'description' => 'required|string|min:10',
            'status' => 'required|in:pending,in-progress,completed',
        ]);

        $validated['user_id'] = auth()->user()->id;

        Task::create($validated);

        return redirect()->route('tasks.index')->with('success', 'Task created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        return Inertia::render('Task/Show', ['task' => $task]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        return Inertia::render('Task/Edit', ['task' => $task]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        $validated = $request->validate([
            'title' => 'required|string|unique:tasks,title,' . $task->id . '|max:255',
            'description' => 'required|string|min:10',
            'status' => 'required|in:pending,in-progress,completed',
        ]);

        $task->update($validated);

        return redirect()->route('tasks.index')->with('success', 'Task updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();
        return redirect()->route('tasks.index')->with('success', 'Task deleted.');
    }
}
