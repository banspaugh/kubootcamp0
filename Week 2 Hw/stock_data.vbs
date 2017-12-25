Sub MoneyLoop()
'Declare
Dim Rownum As Double
Dim ticker As Integer
Dim volTotal As Double
Dim openPrice As Double
Dim closePrice As Double
Dim ws As Worksheet


'Define
Rownum = ActiveSheet.Cells(Rows.Count, "A").End(xlUp).Row
ticker = 2
volTotal = 0
For Each ws In Worksheets

ws.Cells(1, 9).Value = "Ticker"
ws.Cells(1, 10).Value = "Yearly Change"
ws.Cells(1, 11).Value = "Percent Change"
ws.Cells(1, 12).Value = "Total Stock Volume"
ws.Range("A1:L1").Font.Bold = True
    
'Loop
For i = 2 To Rownum
    If ws.Cells(i, 1).Value <> ws.Cells(i + 1, 1).Value Then
        ws.Cells(ticker, 9).Value = ws.Cells(i, 1).Value
        ws.Cells(ticker, 12).Value = volTotal + ws.Cells(i, 7)
        ticker = ticker + 1
        volTotal = 0
        closePrice = Cells(i, 3).Value
        ws.Cells(ticker - 1, 11).Value = Round((openPrice - closePrice) / openPrice * 100, 2) & "%"
        ws.Cells(ticker - 1, 10).Value = openPrice - closePrice
    'color cells
    If ws.Cells(ticker - 1, 10).Value < 0 Then
        ws.Cells(ticker - 1, 10).Interior.ColorIndex = 3
            Else
        ws.Cells(ticker - 1, 10).Interior.ColorIndex = 4
    End If
        
    Else
        volTotal = Cells(i, 7) + volTotal
            If ws.Cells(i, 2).Value = 20160101 Then
            openPrice = ws.Cells(i, 3).Value
           
        End If
    End If
Next
ticker = 2
Next
End Sub
