import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formData = { name: '', email: '', message: '', phone:'' };
  message: string = '';
  constructor(
    public analyticsService: AnalyticsService,
    private http: HttpClient
  ) { }


  submitForm() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
    const apiEndpoint = 'https://e4wrt3qckl.execute-api.us-east-1.amazonaws.com/dev/contact';

    const requestData = {
      "resource": "/contact",
      httpMethod: 'POST',
      body: JSON.stringify({
        fullname: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        message: this.formData.message
      }),
      queryStringParameters: null,
      pathParameters: null
    };

    this.http.post(apiEndpoint, requestData).subscribe(
      (response: any) => {
        console.log('Form submitted successfully:', response);
        // Reset form after successful submission
        console.log(requestData);
        if (response.statusCode == 201) {
          this.message = 'Form submitted successfully';
          this.formData = { name: '', email: '', message: '', phone:''};
        }else{
          this.message = 'Error submitting form. Please try again.';
        }
       
       
        
      },
      (error) => {
        this.message = 'Error submitting form. Please try again.';
        console.error('Error submitting form:', error);
      }
    );
  }
  ngOnInit(): void {
  }

}
