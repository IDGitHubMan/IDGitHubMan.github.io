import numpy as np
import tkinter as tk;
from matplotlib.backends.backend_tkagg import (FigureCanvasTkAgg, NavigationToolbar2Tk)
from matplotlib.backend_bases import key_press_handler
from matplotlib.figure import Figure
import mpld3
import flask

main = tk.Tk();
main.title("Hailstone Series")
sequenceGraph = Figure(figsize=(28, 6), dpi=50)
sequenceCanvas = FigureCanvasTkAgg(sequenceGraph, master=main)

relationGraph = Figure(figsize=(28,6),dpi=50)
relationCanvas = FigureCanvasTkAgg(relationGraph,master=main)

Termination = ""
startval = 100
def Hailstone(val):
    sequenceGraph.clf()
    mplx = []
    sequence = []
    global startval
    startval = int(val)
    counter = 0
    while True:
        if startval == 1 or startval==0:
            break
        elif startval%2==0:
            mplx.append(counter+1)
            sequence.append(startval)
            startval = startval/2
            counter = counter+1
        else:
            mplx.append(counter+1)
            sequence.append(startval)
            counter=counter+1
            startval = startval*3+1
    sequencePlot = sequenceGraph.add_subplot(111)
    sequencePlot.plot(mplx,sequence)
    sequencePlot.scatter(mplx,sequence)
    sequenceCanvas.get_tk_widget().grid(column=0,row=1)
    sequenceCanvas.draw()
    html_str = mpld3.fig_to_html(sequenceGraph)
    Html_file= open("/Users/idesrosiers/Documents/Github/IDGitHubMan.github.io/Python MPLD3 Pages/HailstoneInteractive.html","w")
    Html_file.write(html_str)
    Html_file.close()
    return counter;

def relation():
    mplx = []
    rel = []
    for b in range(50):
        rel.append(Hailstone(b))
        mplx.append(b)
    relationPlot = relationGraph.add_subplot(111)
    relationPlot.scatter(mplx,rel)
    relationPlot.plot(mplx,rel)
    relationCanvas.get_tk_widget().grid(column=0,row=2)
    relationCanvas.draw()
        
startValSlider = tk.Scale(main, label = "Initial Value", orient=tk.HORIZONTAL, from_=0,to_=10000,tickinterval=1000,length=1000,command=Hailstone)
startValSlider.grid(column=0,row=0, columnspan=1)
relation()
